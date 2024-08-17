import { useAccount, useSignMessage } from 'wagmi'

function App() {
  const { signMessage } = useSignMessage()
  const { address, isConnected } = useAccount();
  return (
    <button onClick={() => signMessage({ account:address ,message:"hello world" })}>
      Sign message
    </button>
  )
}