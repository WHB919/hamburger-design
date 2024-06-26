import { ReactNode } from 'react';
export type ButtonSize = 'lg' | 'sm' | 'mid';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'dash';
interface ButtonProps {
    /**添加自定义类名 */
    className?: string;
    /**设置按钮失效状态 */
    disabled?: boolean;
    /**设置按钮尺寸 */
    size?: ButtonSize;
    /**设置按钮类型 */
    btnType?: ButtonType;
    /**设置按钮上的文字 */
    children?: ReactNode;
    /**点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
    href?: string;
}
export type ButtonProp = Partial<ButtonProps>;
/**
 * >按钮用于开始一个即时操作。
 *
 * ### 何时使用
 * 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
 * hamburger-design我们提供了6种按钮
 *
 * - 默认按钮：用于没有主次之分的一组行动点。
 * - 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
 * - 危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。
 * - 链接按钮：一般用于链接，即导航至某位置。
 * - 图标按钮：可以通过Icon组件，为按钮提供各式各样的图标选择。
 * - 虚线按钮：常用于添加操作。
 *
 *
 * 除了默认Mid Button尺寸，还提供了两种尺寸可供自由组合
 * - Large Button
 * - Samll Button
 *
 * 所有按钮都提供了disabled属性，用于行动点不可用的时候，一般需要文案解释。
 *
 */
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
