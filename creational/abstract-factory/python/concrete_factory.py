from product import Logger, ConfigReader
from factory import LoggingFactory
from concrete_product import (
    FileLogger,
    ConsoleLogger,
    FileConfigReader,
    ConsoleConfigReader,
)


class FileLoggingFactory(LoggingFactory):
    def create_logger(self) -> Logger:
        return FileLogger()

    def create_config_reader(self) -> ConfigReader:
        return FileConfigReader()


class ConsoleLoggingFactory(LoggingFactory):
    def create_logger(self) -> Logger:
        return ConsoleLogger()

    def create_config_reader(self) -> ConfigReader:
        return ConsoleConfigReader()
