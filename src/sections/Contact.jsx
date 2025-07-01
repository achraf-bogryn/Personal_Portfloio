import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'
import { Mail, Phone } from 'lucide-react'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact' className='pt-32'>
      <div className='container'>
        <Title
          title='contact'
          highlight='me'
          subtitle='Have an idea, project, or opportunity in mind ? I’d love to hear from you—drop me a message!'
        />
        <div className='md:grid md:grid-cols-2 md:gap-16'>
          <Form />
          <div className='mb-16 mt-8'>

            {/* Phone Number */}
            <div className='mb-4 flex flex-wrap items-center justify-start gap-2'>
              <Phone className='size-5' />
              <a
                className='text-lg font-semibold transition-colors duration-300 hover:text-blue-600'
                href='tel:+212644091028'
              >
                212644091028
              </a>

              {/* Email */}
              <div className='mb-2 flex flex-wrap items-center justify-start gap-2'>
                <Mail className='size-6' />
                <a
                  className='text-lg font-semibold transition-colors duration-300 hover:text-blue-600'
                  href='mailto:achraf.bogryn@um5r.ac.ma'
                >
                  achraf.bogryn@um5r.ac.ma
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact