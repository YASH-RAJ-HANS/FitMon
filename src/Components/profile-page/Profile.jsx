import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <div className="profile_container">
      <form action="#" id="profile-page" class="profile-edit">
        <div class="heading">
          <h3>Profile</h3>
          <p>Update your photo and personal details here.</p>
        </div>

        <div class="row-1">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="olivia" required />
        </div>

        <div class="row-2">
          <label for="website">Website</label>
          <input type="url" id="website" placeholder="www.fitmon.com" />
        </div>

        <div class="row-3">
          <div class="row-3-div-1">
            <label for="photo">
              Your photo <br />
              <span class="para-grey">
                This will be displayed on your profile.
              </span>
            </label>

            <img src="profile.jpeg" id="photo" alt="" />
          </div>
          <div class="row-3-div-2">
            <a href="#" id="link-1">
              Delete
            </a>
            <a href="#" id="link-2">
              Update
            </a>
          </div>
        </div>

        <div class="row-4">
          <label>
            Your bio <br />
            <span class="para-grey">Write a short introduction</span>
          </label>
          <textarea name="paragraph_text" cols="50" rows="10"></textarea>
        </div>

        <div class="row-5">
          <div class="row-5-div-1">
            <label for="job-title">Job title</label>
            <input type="text" id="job-title" placeholder="Product Designer" />
          </div>

          <div class="row-5-div-2">
            <input type="checkbox" name="" id="checkbox" />
            <label for="checkbox">Show my job title in my profile</label>
          </div>
        </div>

        <div class="row-6">
          <label for="email">
            Alternative contact email <br />
            <span class="para-grey">
              Enter an alternative email if you'd like to
            </span>
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="fitmon2022@gmail.com"
          />
        </div>

        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default Profile;
