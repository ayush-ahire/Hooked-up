import "./navbar.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createOrGetUser } from "../../../utils";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import useAuthStore from "../../../store/authStore";
export default function Navbar() {
  const { userProfile, addUser, removeUser } = useAuthStore();
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="Navbar flex z-10 gap-10 items-center ">
        <div className="flex justify-between w-full ">
          <div className="Logo">
            <button className="button1 --font-family-button">HOOKED🪝UP</button>
          </div>
          <div className="Menu  text-center rounded-[8px] text-white relative">
            <ul className="flex justify-between gap-20 p-[15px]">
              <li>
                <Link href="/">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/upload">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </button>
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="Login">
            {userProfile ? (
              <div className="flex gap-5 md:gap-10 items-center">
                {userProfile && (
                  <Link href="/">
                    <Image
                      className="rounded-full cursor-pointer"
                      src={userProfile?.image}
                      alt="user"
                      width={50}
                      height={50}
                    />
                  </Link>
                )}
                <button
                  type="button"
                  className=" border-2 p-3 rounded-full cursor-pointer outline-none shadow-md  
                      "
                  onClick={() => {
                    googleLogout();
                    removeUser();
                  }}
                >
                  <AiOutlineLogout color="red" fontSize={21} />
                </button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(response) => createOrGetUser(response, addUser)}
                onError={() => console.log("error")}
              />
            )}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
