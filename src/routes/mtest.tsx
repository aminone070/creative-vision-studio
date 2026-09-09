import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/mtest")({ component: T });

function T() {
  return (
    <motion.div
      id="mt"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      hello
    </motion.div>
  );
}
