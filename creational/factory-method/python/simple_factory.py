from product import Logger
from concrete_product import ConsoleLogger
from concrete_product import FileLogger


def create_logger(logger_type) -> Logger:
    logger_types = {
        "console": ConsoleLogger,
        "file": FileLogger,
    }

    if logger_type not in logger_types:
        raise ValueError("Invalid logger type provided")

    return logger_types[logger_type]()
