from product import Logger
from concrete_factory import FileLoggerFactory
from concrete_factory import ConsoleLoggerFactory
from simple_factory import create_logger


def perform_logging(logger: Logger, message: str):
    logger.log(message)


console_logger = ConsoleLoggerFactory.create_logger()
file_logger = FileLoggerFactory.create_logger()


perform_logging(console_logger, "Log message to console")
perform_logging(file_logger, "Log message to file")


console_logger2 = create_logger("console")
file_logger2 = create_logger("file")

perform_logging(console_logger2, "Log message to console 2")
perform_logging(file_logger2, "Log message to file 2")
