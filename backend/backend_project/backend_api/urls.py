from . views import MovieViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()

router.register(r'movies',MovieViewSet,basename='movie')
urlpatterns = router.urls

