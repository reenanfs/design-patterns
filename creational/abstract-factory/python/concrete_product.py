from product import Logger, ConfigReader


class ConsoleLogger(Logger):
    def log(self, message):
        print(f"[Console Logger] {message}")


class FileLogger(Logger):
    def log(self, message):
        with open("log.txt", "a") as file:
            file.write(f"[File Logger] {message}\n")


class ConsoleConfigReader(ConfigReader):
    def read_config(self):
        config_data = input("[Config Reader] Enter config: ")
        print(f"[Config Reader] config is: {config_data}")


class FileConfigReader(ConfigReader):
    def read_config(self):
        try:
            with open("config.txt", "r") as file:
                config_data = file.read()
                print(f"[Config Reader] {config_data}")
        except FileNotFoundError:
            print("[Config Reader] Config file not found.")
