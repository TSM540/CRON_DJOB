# CRON simulator

## 1. NB : 
Tout est niquel, rajoutez un fichier.env en rajoutant DATABASE_URL="YOUR DB" 
## Initialisation : 
cd djobcron \
npm i \
npm run start:dev \

faites les requettes sous postman :)
## 2. Les liens 
On a 
>>>https://localhost:3000 \
>>> https://localhost:3000/tasks \
>>> https://localhost:3000/tasks/:id \
>>> https://localhost:3000/tasks/:id/run
## 3. Les requetes

### 3.1. GET 

#### A. https://localhost:3000
#### B. https://localhost:3000/tasks
#### C. https://localhost:3000/tasks/1

### 3.2. Post
####  A. https://localhost:3000/tasks
{
        "id": 3,
        "title": "1",
        "daysOfWeek": [1],
        "time": "NULL",
        "timezone": "NULL",
        "isExecuted": "Idle"
    }
####  B. https://localhost:3000/tasks/2/run

### 3.3. PUT
####  B. https://localhost:3000/tasks/2
{
    "isExecuted": "Idle"
}
### 3.4. DELETE
https://localhost:3000/tasks/2

