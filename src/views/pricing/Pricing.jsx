'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HiOutlineCheck, HiOutlineCalendar } from 'react-icons/hi2';

const plans = [
  {
    name: 'Dashboard Plan',
    price: '10,000',
    desc: 'Best for schools that need a powerful management dashboard',
    features: ['Up to 300 students', 'Admin Dashboard', 'Attendance Management', 'Fee Management', 'Reports & Analytics', 'Email Support'],
    popular: false,
  },
  {
    name: 'Mobile App Plan',
    price: '15,000',
    desc: 'Complete ERP with mobile app for parents & staff',
    features: [
      'Up to 300 students',
      'Android Mobile App',
      'All Dashboard features',
      'Push Notifications',
      'Parent & Student Login',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Custom Plan',
    price: 'Custom',
    desc: 'For large schools & custom requirements',
    features: ['300+ students', 'Custom modules', 'Android + iOS Apps', 'API Integrations', 'Custom branding', 'Dedicated Support'],
    popular: false,
  },
];

export default function Pricing() {
  const router = useRouter();

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Choose Your Plan</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Simple pricing designed for schools of all sizes.</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular ? 'bg-white border-2 border-[#0DA2E7] shadow-2xl scale-105' : 'bg-white border shadow-md hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0DA2E7] text-white text-xs px-4 py-1 rounded-full">Most Popular</div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>

              {/* Price */}
              <div className="mb-4">
                {plan.price !== 'Custom' ? (
                  <h4 className="text-4xl font-extrabold text-[#0DA2E7]">₹{plan.price}</h4>
                ) : (
                  <h4 className="text-3xl font-bold text-[#0DA2E7]">Contact Us</h4>
                )}
              </div>

              {/* Student Info */}
              {plan.price !== 'Custom' && <p className="text-xs text-green-600 mb-6 font-medium">Includes up to 300 students</p>}

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <HiOutlineCheck className="text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => router.push('/demo')}
                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                  plan.popular ? 'bg-[#0DA2E7] text-white hover:opacity-90' : 'border hover:bg-gray-100'
                }`}
              >
                <HiOutlineCalendar />
                {plan.price === 'Custom' ? 'Contact Sales' : 'Book Free Demo'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Extra Pricing */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Additional students will be charged <span className="font-semibold text-black">₹10–₹12 per student/month</span>
          </p>
        </div>
      </div>
    </section>
  );
}
