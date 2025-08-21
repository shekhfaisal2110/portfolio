import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// Utility function for class merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

const ExpandedTabs = ({
  tabs,
  className,
  activeColor = "text-cyan-400",
  onSelect,
  selectedPath,
}) => {
  const buttonVariants = {
    initial: { gap: 0, paddingLeft: ".5rem", paddingRight: ".5rem" },
    animate: (isSelected) => ({
      gap: isSelected ? ".5rem" : 0,
      paddingLeft: isSelected ? "1rem" : ".5rem",
      paddingRight: isSelected ? "1rem" : ".5rem",
    }),
  };
  const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
  };
  const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };
  const Separator = () => (
    <div className="h-[24px] w-[1.2px] bg-white/20" aria-hidden="true" />
  );

  return (
    <div
      className={cn(
        "flex gap-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-1 shadow-lg",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }
        const Icon = tab.icon;
        const isSelected = selectedPath === tab.to;

        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={isSelected}
            onClick={() => onSelect(tab.to)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105",
              isSelected
                ? cn("bg-white/20 backdrop-blur-lg border border-white/30", activeColor)
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            )}
            type="button"
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
            {isSelected && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-50 -z-10" />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ExpandedTabs;
