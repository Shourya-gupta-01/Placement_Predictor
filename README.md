# 📊 Placement Predictor

A machine learning-powered web application that predicts placement potential based on academic and skill inputs.  
The project combines a modern, animated frontend with a FastAPI backend for real-time predictions.

---

## 🚀 Features
- 🎨 Beautiful UI – Responsive, animated design with floating effects  
- 🧮 Prediction Model – Uses scikit-learn and FastAPI for backend prediction  
- 📋 User Inputs:
  - Name  
  - IQ  
  - CGPA  
  - Last Semester Result  
  - Communication Skills  

---

## 🛠️ Tech Stack
**Frontend**
- HTML5, CSS3, JavaScript  

**Backend**
- FastAPI (Python)  
- scikit-learn, pandas, numpy  

**Server**
- Uvicorn (for running FastAPI)  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/placement-predictor.git
cd placement-predictor
```
### 2. Set Up Backend (FastAPI)
```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
Run the FastAPI server:
```bash
uvicorn backend.main:app --reload
```

### 3. Run Frontend
Simply open index.html in a browser, or serve via Live Server (VS Code extension).

## 🔮 Usage
- Enter your details (IQ, CGPA, etc.).
- Click Predict Placement.
-The app will show your predicted placement potential in a popup.

## 🤝 Contributing
- Contributions are welcome! Please open an issue or submit a pull request



