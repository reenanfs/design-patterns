from component import FileSystemComponent


class FileComponent(FileSystemComponent):
    def __init__(self, name: str, size: int):
        self.name = name
        self.size = size

    def get_name(self) -> str:
        return self.name

    def get_size(self) -> int:
        return self.size
