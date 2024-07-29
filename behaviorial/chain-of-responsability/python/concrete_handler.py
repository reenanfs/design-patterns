from typing import Optional
from base_handler import BaseHandler


class ConcreteHandler1(BaseHandler):
    def handle(self, request: str) -> Optional[str]:
        if request == 'Request1':
            return f'ConcreteHandler1 handled the request: {request}'
        return super().handle(request)


class ConcreteHandler2(BaseHandler):
    def handle(self, request: str) -> Optional[str]:
        if request == 'Request2':
            return f'ConcreteHandler2 handled the request: {request}'
        return super().handle(request)


class ConcreteHandler3(BaseHandler):
    def handle(self, request: str) -> Optional[str]:
        if request == 'Request3':
            return f'ConcreteHandler3 handled the request: {request}'
        return super().handle(request)
