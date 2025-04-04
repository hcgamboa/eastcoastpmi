export function Button({ children, variant = 'default', className = '' }) {
  const base = 'px-4 py-2 rounded font-semibold';
  const styles = variant === 'outline' ? 'border border-white' : 'bg-white text-blue-900';
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
