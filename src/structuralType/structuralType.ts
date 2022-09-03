type VerifyUserFn = (user: User, recivedValues: User) => boolean

type User = {
  userName: string
  passWord: string
}
const verifyUser: VerifyUserFn = (user, recivedValues) => {
  return (
    user.userName === recivedValues.userName &&
    user.passWord === recivedValues.passWord
  )
}

const bdUser = { userName: 'Thiago', passWord: '1234' }
const recivedValues = { userName: 'Thiago', passWord: '1234' }

const loggedIn = verifyUser(bdUser, recivedValues)
console.log(loggedIn)
export default ''
