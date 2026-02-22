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
    name: '',
    email: '',
    company: '',
    service: '',
    industry: '',
    details: '',
    timeline: '',
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

    // Basic validation check
    if (!formData.name || !formData.email || !formData.details) {
      setError("Please fill out all required fields.")
      setIsPending(false)
      return
    }

    const result = await sendContactEmail(formData)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      // This will display the Resend Sandbox error message if it fails
      setError(result.error || "Submission failed. Please try again.")
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-vericheck-grey">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-vericheck-navy mb-2">Request an Inspection</h2>
          <p className="text-vericheck-navy/70">Provide your details below for a customized quote.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-vericheck-navy/5"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-10"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-vericheck-navy">Message Sent Successfully!</h3>
                <p className="text-gray-600 mt-2">We have received your request and will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-vericheck-navy">Full Name</label>
                    <Input name="name" placeholder="Enter your name" onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-vericheck-navy">Work Email</label>
                    <Input name="email" type="email" placeholder="email@company.com" onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-vericheck-navy">Company Name</label>
                    <Input name="company" placeholder="Your Company" onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-vericheck-navy">Service Required</label>
                    <Select onValueChange={(v) => handleSelectChange('service', v)}>
                      <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Textiles">Textiles & Apparel</SelectItem>
                        <SelectItem value="Marble">Quality Management Training</SelectItem>
                        <SelectItem value="Marble">Marble Facade</SelectItem>
                        <SelectItem value="Marble">Cookware</SelectItem>
                        <SelectItem value="Marble">Food & Beverage Porcelain</SelectItem>
                        <SelectItem value="Marble">Stainless Steel Tableware</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block text-vericheck-navy">Inspection Details</label>
                  <Textarea 
                    name="details" 
                    placeholder="Describe the scope of work..." 
                    className="min-h-[120px]" 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2 text-sm border border-red-100"
                  >
                    <AlertCircle size={18} /> {error}
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  disabled={isPending} 
                  className="w-full bg-vericheck-blue hover:bg-vericheck-navy text-white font-bold h-12 transition-all shadow-md"
                >
                  {isPending ? (
                    <><Loader2 className="animate-spin mr-2" /> Processing...</>
                  ) : (
                    "Submit Quote Request"
                  )}
                </Button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}