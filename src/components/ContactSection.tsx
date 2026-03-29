import { motion } from "framer-motion";

const contacts = [
  { name: "Shri Mahesh Kumar", relation: "Father of the Groom", phone: "+91 98765 43210" },
  { name: "Shri Ramesh Sharma", relation: "Father of the Bride", phone: "+91 98765 43211" },
];

const ContactSection = () => {
  return (
    <section className="py-20 relative bg-temple-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">संपर्क</p>
          <h2 className="font-heading text-3xl md:text-4xl text-cream">
            Family Contacts
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.name}
              className="flex-1 border border-gold/30 rounded-sm p-6 text-center backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, hsl(39 100% 95% / 0.1), hsl(39 80% 88% / 0.05))",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="font-heading text-lg text-cream mb-1">{contact.name}</h3>
              <p className="font-body text-cream/60 text-sm mb-3 italic">{contact.relation}</p>
              <a
                href={`tel:${contact.phone}`}
                className="font-body text-saffron hover:text-gold transition-colors text-sm"
              >
                📞 {contact.phone}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gold/20">
          <p className="font-shloka text-cream/50 text-lg mb-2">
            सर्वे भवन्तु सुखिनः
          </p>
          <p className="font-body text-cream/30 text-xs italic">
            "May all beings be happy"
          </p>
          <p className="font-body text-cream/20 text-xs mt-4">
            Made with 🪷 & devotion
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
