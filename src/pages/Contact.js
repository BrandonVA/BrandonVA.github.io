import React from "react";

const Contact = () => {
  window.document.title = "Brandon VanAllen | Contact";
  return (
    <div style={{ minHeight: "100vh" }}>
      <main class="container-fluid">
        <div class="row">
          <div class="col-lg-8  mt-5 mx-auto shadow p-5 rounded">
            <h1 class="my-3 blue-text">Contact</h1>
            <hr />
            <form
              class="col-sm-10"
              action="mailto:codebva@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div class="form-group">
                <label for="formName" class="p-text ml-0">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control bg-grey"
                  id="formName"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="formEmail" class="p-text ml-0">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control bg-grey"
                  id="formEmail"
                  name="email"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="formTextArea" class="p-text ml-0">
                  Example textarea
                </label>
                <textarea
                  class="form-control bg-grey"
                  id="formTextArea"
                  rows="3"
                  name="comment"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-color">
                Submit
              </button>
            </form>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
