from product import Logger
from factory import LoggerFactory
from concrete_product import (
    FileLogger,
    ConsoleLogger,
)


class ConsoleLoggerFactory(LoggerFactory):
    def create_logger() -> Logger:
        return ConsoleLogger()


class FileLoggerFactory(LoggerFactory):
    def create_logger() -> Logger:
        return FileLogger()
