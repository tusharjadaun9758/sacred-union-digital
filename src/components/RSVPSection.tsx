import { useState } from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const RSVPSection = () => {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState("1");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-temple-gradient relative">
      <div className="bg-sacred absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">कृपया सूचित करें</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            Your Blessings
          </h2>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {submitted ? (
            <div className="text-center border-ornate rounded-sm p-12 bg-card/50">
              <span className="text-6xl mb-6 block">🙏</span>
              <h3 className="font-heading text-2xl text-deep-red mb-2">
                {attending ? "Thank You for Your Blessings!" : "We Will Miss You!"}
              </h3>
              <p className="font-body text-muted-foreground italic">
                {attending
                  ? "Your presence will make the ceremony truly divine."
                  : "Your blessings are with us in spirit."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-ornate rounded-sm p-8 md:p-10 bg-card/50 backdrop-blur-sm space-y-6">
              {/* Name */}
              <div>
                <label className="font-heading text-sm text-deep-red/80 block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-sm 
                             font-body text-foreground placeholder:text-muted-foreground/50
                             focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="font-heading text-sm text-deep-red/80 block mb-3">
                  Will You Grace Us With Your Presence?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending(true)}
                    className={`py-3 px-4 rounded-sm border font-body text-sm transition-all duration-300 ${
                      attending === true
                        ? "border-gold bg-gold/20 text-deep-red glow-gold"
                        : "border-border bg-background/30 text-foreground/70 hover:border-gold/40"
                    }`}
                  >
                    🙏 Will attend with blessings
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending(false)}
                    className={`py-3 px-4 rounded-sm border font-body text-sm transition-all duration-300 ${
                      attending === false
                        ? "border-gold bg-gold/20 text-deep-red glow-gold"
                        : "border-border bg-background/30 text-foreground/70 hover:border-gold/40"
                    }`}
                  >
                    Unable to attend
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {attending && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="font-heading text-sm text-deep-red/80 block mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-sm 
                               font-body text-foreground
                               focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label className="font-heading text-sm text-deep-red/80 block mb-2">
                  Your Blessings & Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-sm 
                             font-body text-foreground placeholder:text-muted-foreground/50
                             focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                  placeholder="Share your blessings..."
                />
              </div>

              <button
                type="submit"
                disabled={attending === null || !name}
                className="w-full py-3 font-heading text-sm tracking-widest uppercase
                           bg-deep-red text-primary-foreground rounded-sm
                           hover:bg-deep-red/90 disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300"
              >
                Send Blessings 🙏
              </button>
            </form>
          )}
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default RSVPSection;
