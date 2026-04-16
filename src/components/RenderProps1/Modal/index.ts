type ModalProps = {
  render: () => JSX.Element
}

export const Modal: React.FC<ModalProps> = ({render}) => {
  return render()
}
