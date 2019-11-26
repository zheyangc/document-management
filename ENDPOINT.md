# ENDPOINT DESIGN 

GET /user
GET /user/{userId}
GET /user/{userId}/documents
GET /user/{userId}/documents?type={typeId}&docId={docId}

POST /user
{
    "userName": "name"
    "password": "password"
}

GET /documents/
GET /documents?type={typeId}&docId={docId}
POST /documents 

{
    "user": "userId",
    "documentsType": "typeId",
    "count": "2"
}

