import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const CustomDialog = ({
  open,
  onClose,
  onDecline,
  children,
  buttons,
  title,
}) => {
  const [confirm, cancel] = buttons;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDecline}>{confirm}</Button>
        <Button onClick={onClose}>{cancel}</Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomDialog;
