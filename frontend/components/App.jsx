import { AuthProvider, Descope } from "@descope/react-sdk"
import { useRef } from "react";

export default function App() {
  console.log('current url', window.location.href)
  const proxyUrl = import.meta.env.VITE_PROXY_URL;
  console.log("🚀 ~ App ~ proxyUrl:", proxyUrl)
const storeUrl = import.meta.env.VITE_STORE_URL;
  console.log("🚀 ~ App ~ storeUrl:", storeUrl)
  const hiddenFormRef = useRef(null);

  const testProxy = (params) => {
    return new Promise((resolve, reject) => {
      fetch(`https://tuantt-store.myshopify.com/apps/proxytest?` + new URLSearchParams(params).toString(), 
    {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    }}
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
  }

  return (
    <div className="tw-text-5xl tw-text-red-600">
      <div>
      <AuthProvider projectId="P2jMGin9Vc2HQ3AdjdVFviEQxvjJ">
        <Descope
          flowId="sign-up-or-in"
          theme="light"
          redirectUrl={window.location.href}
          onSuccess={(e) => {
            console.log("🚀 ~ App ~ e.detail:", e.detail.user)

            const { email, name } = e.detail.user;

            const nameParts = name.split(' ');

            let lastName, firstName;
            if (nameParts.length === 1) {
              firstName = nameParts[0];
              lastName = '';
            } else {
              firstName = nameParts[0];
              lastName = nameParts[nameParts.length - 1];
            }

            testProxy({
              email,
              firstName,
              lastName,
            })
            .then(() => {
              const params = new URLSearchParams(window.location.search);
              const checkout_url = params.get('checkout_url');

              hiddenFormRef.current.querySelector('#hiddenEmail').value = email;
              hiddenFormRef.current.querySelector('#hiddenPassword').value = email;
              hiddenFormRef.current.querySelector('#hiddenRedirect').value = checkout_url ? `https://tuantt-store.myshopify.com${checkout_url}` : `https://tuantt-store.myshopify.com/account`;

              hiddenFormRef.current.submit();
            })
            .catch(error => {
              console.log("Error!", error)
            });
          }}
          onError={(err) => {
            console.log("Error!", err)
          }}
        />
      </AuthProvider>
      </div>
      <div>
      <form
        id="hiddenLoginForm"
        action="/account/login"
        method="post"
        style={{ display: 'none' }}
        ref={hiddenFormRef}
      >
        <input type="email" name="customer[email]" id="hiddenEmail" />
        <input type="password" name="customer[password]" id="hiddenPassword" />
        <input type="hidden" name="return_to" id="hiddenRedirect"/>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

