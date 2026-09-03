import './NavigationButton.css'

function NavigationButton({
  onClick,
  children,
}: NavigationButtonProps) {
  return (
    <button onClick={onClick} className="my-button">
      {children}
    </button>
  );
}

export default NavigationButton;