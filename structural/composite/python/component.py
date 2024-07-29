class FileSystemComponent:
    def get_name(self) -> str:
        raise NotImplementedError

    def get_size(self) -> int:
        raise NotImplementedError