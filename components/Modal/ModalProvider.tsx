import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal"
import ForgetModal from "./ForgetModal"
import ResetModal from "./ResetModal"

const ModalProvider = () => {
  return (
    <>
      <LoginModal/>
      <SignUpModal/>
      <ForgetModal/>
      <ResetModal/>
    </>
  )
}

export default ModalProvider