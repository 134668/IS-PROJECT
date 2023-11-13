import requests


url = "https://ml-model-apiheroku-4dd528d702fb.herokuapp.com/diabetes_prediction"


input_data = {
    "Pregnancies": 1,
    "Glucose": 85,
    "BloodPressure": 66,
    "SkinThickness": 29,
    "Insulin": 0,
    "BMI": 26.6,
    "Age": 31
}

response = requests.post(url, json=input_data)

print("Response status code:", response.status_code)
print("Response text:", response.text)