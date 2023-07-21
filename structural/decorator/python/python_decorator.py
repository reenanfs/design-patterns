import time


def python_timer_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        elapsed_time = (end_time - start_time) * 1000
        print(
            "[Python Decorator] Time taken to send notification:"
            f" {elapsed_time} milliseconds"
        )
        return result

    return wrapper
