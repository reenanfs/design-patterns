
from concrete_handler import ConcreteHandler1, ConcreteHandler2, ConcreteHandler3

handler1 = ConcreteHandler1()
handler2 = ConcreteHandler2()
handler3 = ConcreteHandler3()

handler1.set_next(handler2).set_next(handler3)

requests = ['Request1', 'Request2', 'Request3', 'UnknownRequest']

for request in requests:
    result = handler1.handle(request)
    if result:
        print(result)
    else:
        print(f'No handler could process the request: {request}')
