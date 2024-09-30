import { useNavigate } from "../customHooks/useNavegate"

export function Link({ target, to, ...props }) {

  const { navigate } = useNavigate();

  const handleClick = event => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    const isManageableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  }
  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  )
}
