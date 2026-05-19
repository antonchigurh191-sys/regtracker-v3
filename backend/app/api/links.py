from fastapi import APIRouter

router = APIRouter(prefix="/links", tags=["links"])


@router.get("/")
async def get_links():
    return {"message": "links endpoint"}