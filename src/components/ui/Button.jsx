import React from "react";
import Icon from "./Icon";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
}) {
  // VARIANTS (STRICT TO YOUR RULES)
  const variants = {
    primary: "bg-accent1 text-white hover:bg-accent1/90",
    secondary: "bg-accent2 text-white hover:bg-accent2/90",
    dark: "bg-black text-white hover:bg-black/90",
    ghost: "bg-transparent text-black hover:bg-black/10",
    outline: "border border-black text-black hover:bg-black/10",
  };

  // SIZES
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  // SPINNER COLOR LOGIC
  const spinnerColor =
    variant === "primary" || variant === "secondary" || variant === "dark" ? "border-white" : "border-black";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {/* LEFT ICON */}
      {icon && iconPosition === "left" && !loading && <Icon icon={icon} width="20" />}

      {/* CONTENT / LOADING */}
      {loading ? (
        <div className={`w-5 h-5 border-2 border-t-transparent ${spinnerColor} rounded-full animate-spin`}></div>
      ) : (
        children
      )}

      {/* RIGHT ICON */}
      {icon && iconPosition === "right" && !loading && <Icon icon={icon} width="20" />}
    </button>
  );
}

export default Button;
