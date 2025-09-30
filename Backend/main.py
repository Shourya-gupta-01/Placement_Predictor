from fastapi import FastAPI
from fastapi.responses import JSONResponse
import json
from pydantic import BaseModel, Field
from typing import Annotated
import pickle
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

with open(r'services\SVM.pkl', 'rb') as f:
    model=pickle.load(f)

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Student_Info(BaseModel):
    iq:Annotated[int, Field(..., gt=50, le=160, description="Enter User's IQ Level")]
    lst_sgpa:Annotated[float, Field(..., gt=0, le=10, description="Enter the User's last semester result")]
    cgpa:Annotated[float, Field(..., gt=0, le=10, description="Enter the User's CGPA")]
    communication_skill:Annotated[float, Field(..., gt=0, le=10, description="Enter the User's Communication skills rate out of 10")]

@app.post("/predict")
def predict_placement(data: Student_Info):
    input_df = pd.DataFrame([{'IQ': data.iq,
                  'Prev_Sem_Result': data.lst_sgpa,
                  'CGPA': data.cgpa,
                  'Communication_Skills': data.communication_skill}])
    
    prediction = model.predict(input_df)[0]
    if prediction==1:
        prediction="Yes"
    else:
        prediction="No"
    
    probability = model.predict_proba(input_df)[0][1]
    
    return JSONResponse(status_code=200, content={'Prediction': prediction, 'Probability':probability})    