function NavigationButton({
  onClick,
  children,
}: NavigationButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default NavigationButton;