import { Ref, ref } from "vue";

export enum NotificationSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export type NotificationOptions = {
  size?: NotificationSize | string;
};

export type NotificationProps = {
  [param: string]: any;
};

export interface INotification {
  component: any;
  options?: NotificationOptions;
  props?: NotificationProps;
}

export class NotificationService {
  private notification: Ref<INotification | null> = ref(null);
  private resolve!: (value: any | PromiseLike<any>) => void;

  public open<T = any>(modal: INotification): Promise<T> {
    if (modal) {
      this.disableScroll(true);
    }
    this.notification = ref(modal);
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  public getNotification(): INotification {
    return this.notification as unknown as INotification;
  }

  public close(result: any): void {
    this.disableScroll(false);

    if (this.resolve) {
      this.resolve(result);
    }

    this.notification = ref(null);
  }

  public disableScroll(status: boolean) {
    document
      .getElementsByTagName("body")
      ?.item(0)
      ?.setAttribute("style", `overflow: ${status ? "hidden" : "inherit"}`);
  }
}

export class NotificationGod {
  constructor(private service: NotificationService) {}

  public open<T = any>(
    notificationService: NotificationService | undefined | null,
    component: any,
    props?: NotificationProps,
    options?: NotificationOptions
  ): Promise<T> {
    if (!this.service) {
      return Promise.reject();
    }
    return this.service.open<T>({
      component,
      props,
      options,
    });
  }
}
