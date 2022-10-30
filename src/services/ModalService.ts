import { Ref, ref } from "vue";

export enum ModalSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export type ModalOptions = {
  size?: ModalSize | string;
};

export type ModalProps = {
  [param: string]: any;
};

export interface IModal {
  component: any;
  options?: ModalOptions;
  props?: ModalProps;
}

export class ModalService {
  private modal: Ref<IModal | null> = ref(null);
  private resolve!: (value: any | PromiseLike<any>) => void;

  public open<T = any>(modal: IModal): Promise<T> {
    if (modal) {
      this.disableScroll(true);
    }
    this.modal = ref(modal);
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  public getModal(): IModal {
    return this.modal as unknown as IModal;
  }

  public close(result: any): void {
    this.disableScroll(false);

    if (this.resolve) {
      this.resolve(result);
    }

    this.modal = ref(null);
  }

  public disableScroll(status: boolean) {
    document
      .getElementsByTagName("body")
      ?.item(0)
      ?.setAttribute("style", `overflow: ${status ? "hidden" : "inherit"}`);
  }
}

export class ModalGod {
  public static open<T = any>(
    modalService: ModalService | undefined | null,
    component: any,
    props?: ModalProps,
    options?: ModalOptions
  ): Promise<T> {
    if (!modalService) {
      return Promise.reject();
    }
    return modalService.open<T>({
      component,
      props,
      options,
    });
  }
}
