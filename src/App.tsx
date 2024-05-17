import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} className="box" style={{ x, y }} />;
}
