'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, CheckCircle, AlertCircle } from 'lucide-react'
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

const services = [
  'Textiles & Apparel',
  'Marble Facade Quality',
  'Cookware Quality',
  'Carpet Quality',
  'Food & Beverage Porcelain',
  'Stainless Steel Tableware',
  'Plastic Product Quality',
  'Glassware Quality'
]

const steps = [
  { id: 1, name: 'Basic Info', fields: ['name', 'email', 'company'] },
  { id: 2, name: 'Service Type', fields: ['service', 'industry'] },
  { id: 3, name: 'Details', fields: ['details', 'timeline'] },
  { id: 4, name: 'Review', fields: [] },
]

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateStep = (step: number) => {
    const currentStepData = steps[step - 1]
    for (const field of currentStepData.fields) {
      if (!formData[field as keyof typeof formData]) {
        setError(`Please fill in all fields`)
        return false
      }
    }
    return true
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length))
    }
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(currentStep)) {
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setCurrentStep(1)
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          industry: '',
          details: '',
          timeline: '',
        })
      }, 3000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-vericheck-grey">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vericheck-navy mb-4 text-pretty">
            Request an Inspection
          </h2>
          <p className="text-lg text-vericheck-navy/70 leading-relaxed">
            Fill out a quick form to get a custom quote for your inspection needs
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-vericheck-white p-8 md:p-12 rounded-xl border-2 border-vericheck-navy/10 shadow-lg"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <CheckCircle className="w-16 h-16 text-vericheck-lime" />
                </motion.div>
                <h3 className="text-2xl font-bold text-vericheck-navy mb-2">
                  Thank You!
                </h3>
                <p className="text-vericheck-navy/70 mb-4">
                  We've received your inspection request. Our team will contact you within 24 hours.
                </p>
                <p className="text-vericheck-navy/50 text-sm">
                  Redirecting...
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-3">
                    {steps.map((step) => (
                      <motion.button
                        key={step.id}
                        type="button"
                        onClick={() =>
                          step.id <= currentStep && setCurrentStep(step.id)
                        }
                        className={`text-sm font-semibold transition-colors ${
                          step.id <= currentStep
                            ? 'text-vericheck-lime'
                            : 'text-vericheck-navy/50'
                        }`}
                      >
                        {step.name}
                      </motion.button>
                    ))}
                  </div>
                  <div className="h-2 bg-vericheck-navy/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-vericheck-blue to-vericheck-lime"
                      initial={{ width: '25%' }}
                      animate={{
                        width: `${(currentStep / steps.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700">{error}</p>
                  </motion.div>
                )}

                {/* Step 1: Basic Info */}
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="border-vericheck-navy/20 focus:border-vericheck-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="border-vericheck-navy/20 focus:border-vericheck-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Company Name *
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="border-vericheck-navy/20 focus:border-vericheck-blue"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Service Type */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Service Type *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleSelectChange('service', value)
                          }
                        >
                          <SelectTrigger className="border-vericheck-navy/20">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Industry *
                        </label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) =>
                            handleSelectChange('industry', value)
                          }
                        >
                          <SelectTrigger className="border-vericheck-navy/20">
                            <SelectValue placeholder="Select an industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Textiles">Textiles</SelectItem>
                            <SelectItem value="Food & Beverage Porcelain">Food & Beverage Porcelain</SelectItem>
                            <SelectItem value="Glassware">
                              Glassware
                            </SelectItem>
                            <SelectItem value="Plastic Product">
                              Plastic Product
                            </SelectItem>
                            <SelectItem value="Plastic Product">
                              Marble Facade
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Inspection Details *
                        </label>
                        <Textarea
                          name="details"
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="Describe what needs to be inspected..."
                          className="border-vericheck-navy/20 focus:border-vericheck-blue min-h-32"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-vericheck-navy mb-2">
                          Required Timeline *
                        </label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            handleSelectChange('timeline', value)
                          }
                        >
                          <SelectTrigger className="border-vericheck-navy/20">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Urgent (Within 48 hours)">
                              Urgent (Within 48 hours)
                            </SelectItem>
                            <SelectItem value="ASAP (1-3 days)">
                              ASAP (1-3 days)
                            </SelectItem>
                            <SelectItem value="Flexible (1-2 weeks)">
                              Flexible (1-2 weeks)
                            </SelectItem>
                            <SelectItem value="Planning phase">
                              Planning phase
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div className="bg-vericheck-grey p-6 rounded-lg space-y-3">
                        <div className="flex justify-between">
                          <span className="text-vericheck-navy/70">Name:</span>
                          <span className="font-semibold text-vericheck-navy">
                            {formData.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-vericheck-navy/70">Email:</span>
                          <span className="font-semibold text-vericheck-navy">
                            {formData.email}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-vericheck-navy/70">Company:</span>
                          <span className="font-semibold text-vericheck-navy">
                            {formData.company}
                          </span>
                        </div>
                        <div className="border-t border-vericheck-navy/10 pt-3 flex justify-between">
                          <span className="text-vericheck-navy/70">Service:</span>
                          <span className="font-semibold text-vericheck-navy">
                            {formData.service}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-vericheck-navy/70">Industry:</span>
                          <span className="font-semibold text-vericheck-navy">
                            {formData.industry}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-vericheck-navy/70">Timeline:</span>
                          <span className="font-semibold text-vericheck-navy">
                            {formData.timeline}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrev}
                      className="flex-1 border-vericheck-navy/20"
                    >
                      Back
                    </Button>
                  )}
                  {currentStep < steps.length ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 bg-vericheck-blue hover:bg-vericheck-blue/90 text-white font-bold flex items-center justify-center gap-2"
                    >
                      Next
                      <ChevronRight size={18} />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-bold"
                    >
                      Submit Request
                    </Button>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
