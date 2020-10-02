![SIMPLERx](https://socialify.git.ci/MLH-Fellowship/SIMPLERx/png?description=1&font=Bitter&forks=0&issues=1&logo=https%3A%2F%2Fwww.flaticon.com%2Fsvg%2Fstatic%2Ficons%2Fsvg%2F32%2F32139.svg&owner=1&pattern=Plus&pulls=0&theme=Light)
### Forget your papers. 📝
What if we told you that you don't need your prescriptions when you go to the doctor's? 👩‍⚕️

What if we told you your pharmacist just needs one ID card to give you all your medicines? 💊

Here's SimpleRx. ✨ All the simplicity, none of the work. 😌

## ⚙️ What it does

At its core, SimpleRx is a centralized health records and prescription management system.

Think of your prescription folder, but on the cloud. Accessible whenever and wherever you want it, just a screen away. No more gaps in medical history because you can't find the papers, everything remains safe and accessible to the doctors on your next visit. 🏥

No need to wait at the pharmacy or look for that prescription when it's time for a refill - they can see your current prescriptions just as soon as you want the medicines to reach your home. 🏠

## ⚙️ Installation
### 🏗️ Building dependencies

```bash
$ git clone git@github.com:MLH-Fellowship/SIMPLERx.git
$ cd SIMPLERx
$ pip3 install -r requirements.txt
$ npm install
```
### 🖥️ Running the server
To run the backend, then you use:
```bash
$ cd app
$ python3 manage.py runserver
	Starting development server at http://127.0.0.1:8000/
```
Finally, using `tmux` or something similar (you can use a shell script as well) to run the frontend:
```bash
$ npm start
```

You should be good to go! 🚀

## 🔜 What's next

SimpleRx believes in taking things one step farther.

* Digitizing lab records with OCR and securely storing them on the cloud 🔎
* Flagging allergies and intelligent drug suggestions 💬
* Automate pharmacy deliveries and pickup notifications 📦
* More complex filters to prevent fraud and protect privacy 🔒

## 🤼 About
This project was built by [Rohan Rout](https://github.com/routrohan), [Sakshi Rambhia](https://github.com/Sakshi16) and [Ankit Maity](https://github.com/QEDK). 👷

### ⚛️🐍 Tech-stack
This project was made with a ReactJS frontend, a Django backend, backed by a MongoDB database.

## 📜 License
Licensed under Apache License 2.0 or later ([LICENSE](LICENSE) or https://www.apache.org/licenses/LICENSE-2.0)

### 🖊️ Contributions
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be licensed as above, without any additional terms or conditions.