import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import Image from "next/image";
import styles from "../sidebars/styles/siderbar.module.css";
export default function CustomWallet() {
    const { address, isConnected } = useAccount();
    // console.log(address);
    const { data, isError, isLoading } = useEnsName({
      address: address,
    });
    const avatar = useEnsAvatar({
      name: data,
    });
    // console.log({ address });
    // console.log({ avatar });
    // console.log(isError);
    // console.log(isLoading);
    // console.log(data);
    return (
      <div>
        <div className={styles.walletButton}>
          <div>
            {avatar.isLoading || avatar.data == undefined ? (
              <img alt="Avatar" src="favicon.ico" className={styles.avatar} />
            ) : (
              <Image
                height={70}
                width={70}
                alt="Avatar"
                src={avatar.data}
                className={styles.avatar}
              />
            )}
          </div>
          <div>
            {!isConnected || address == undefined ? (
              <w3m-button></w3m-button>
            ) : (
              <w3m-account-button />
            )}
            <h1 className={styles.ensName}>{isLoading ? "Loading..." : data}</h1>
          </div>
        </div>
      </div>
    );
  }
  