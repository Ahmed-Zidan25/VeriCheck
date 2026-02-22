'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { sendContactEmail } from '@/app/actions/sendEmail'

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '', email: '', company: '',
    service: '', industry: '', details: '', timeline: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    setError('')

    // Final check for empty fields
    if (Object.values(formData).some(x => x === '')) {
      setError("Please fill out all required fields.")
      setIsPending(false)
      return
    }

    const result = await sendContactEmail(formData)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError("Submission failed. Please try again later.")
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-vericheck-grey">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-vericheck-navy mb-2">Request an Inspection</h2>
          <p className="text-vericheck-navy/70">Fill in the details below and we'll get back to you with a quote.</p>
        </div>

        <motion.div className="bg-white p-8 rounded-2xl shadow-xl border border-vericheck-navy/5">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-600 mt-2">Check your inbox at {formData.email} for a confirmation soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Row 1 */}
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Full Name</label>
                    <Input name="name" placeholder="John Doe" onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Work Email</label>
                    <Input name="email" type="email" placeholder="john@company.com" onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Company</label>
                    <Input name="company" placeholder="Company Name" onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Row 2 */}
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Service</label>
                    <Select onValueChange={(v) => handleSelectChange('service', v)}>
                      <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Textiles">Textiles & Apparel</SelectItem>
                        <SelectItem value="Marble">Marble Facade</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Industry</label>
                    <Select onValueChange={(v) => handleSelectChange('industry', v)}>
                      <SelectTrigger><SelectValue placeholder="Select Industry" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="Retail">Retail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Timeline</label>
                    <Select onValueChange={(v) => handleSelectChange('timeline', v)}>
                      <SelectTrigger><SelectValue placeholder="How soon?" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Urgent">Urgent (48h)</SelectItem>
                        <SelectItem value="Standard">1-3 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Detailed Requirements</label>
                  <Textarea name="details" placeholder="Tell us more about the inspection needs..." className="min-h-[120px]" onChange={handleChange} required />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
                    <AlertCircle size={18} /> {error}
                  </div>
                )}

                <Button type="submit" disabled={isPending} className="w-full bg-vericheck-blue hover:bg-vericheck-navy text-white font-bold h-12 transition-all">
                  {isPending ? <Loader2 className="animate-spin mr-2" /> : "Submit Quote Request"}
                </Button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}