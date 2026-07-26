'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Schools Trust Us' },
  { value: '50K+', label: 'Active Students' },
  { value: '1M+', label: 'Attendance Records' },
  { value: '99.9%', label: 'System Uptime' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function TrustedSection() {
  return (
    <section
      className="pb-8 md:pb-14"
      aria-labelledby="trusted-schools-heading"
    >
      <div className="container-shell">
        <motion.div
          className="glass-card py-8 px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2
            id="trusted-schools-heading"
            className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slateSoft"
          >
            Trusted by Schools Across India
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-brand">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slateSoft">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}