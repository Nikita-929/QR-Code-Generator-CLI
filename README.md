# QR-Code-Generator-CLI
# 📦 QR Code Generator CLI (Node.js)

This is a simple command-line tool built with Node.js that allows users to input a URL and generates a QR code as a PNG image. It also saves the entered URL into a text file.

## 🚀 Features

- Prompt user to enter a URL
- Generates a PNG QR code for the given URL
- Saves the QR code as `qr_output.png`
- Writes the URL to `input.txt`

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer) – for CLI prompts
- [qr-image](https://www.npmjs.com/package/qr-image) – for generating QR codes
- Built-in `fs` module – for file handling

## 📂 Project Structure

```
├── index.js           # Main script
├── qr_output.png      # (Generated) QR code image
├── input.txt          # (Generated) File saving input URL
├── package.json
```

## 🧑‍💻 Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Program

```bash
node index.js
```

## ✏️ Example Output

After running the script:

- A file named `qr_output.png` will be created with the QR code of the entered URL.
- The URL you entered will be saved in a file called `input.txt`.




