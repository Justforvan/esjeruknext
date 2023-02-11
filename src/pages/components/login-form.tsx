export default function LoginForm(){
    return (
      <>
        <main className="">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating mt-4">
              <label htmlFor="floatingInput">Email address</label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-floating mt-4">
              <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                id="floatingPassword"
                placeholder="Password"
              />
            </div>

            <div className="mt-2">
              <label>
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="checkbox" />
                </label>
              </label>
            </div>
            <button className="btn mt-4" type="submit">
              Sign in
            </button>
          </form>
        </main>
      </>
    );
}