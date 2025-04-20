# Bugs

如果您发现了Bug可以：
- 前往[交流群](https://qm.qq.com/q/rKS0ZPrkis)反馈
- 提交[Issue](https://gitee.com/gavascript-dev/homepage/issues)
- 提交[问卷](https://ccnqubr58jmo.feishu.cn/share/base/form/shrcncDoBEosgzREGYQLK7nclyh)

::: details 说明
Bug按照发现时间排序 

bug前缀：<Badge type="danger" text="未修复"/> <Badge type="warning" text="修复中"/> <Badge type="info" text="已修复"/> <Badge type="tip" text="快照"/> （仅在快照版本中出现）

等级：
- 【崩溃】：阻碍开发或测试工作的问题；造成系统崩溃、死机、死循环，导致数据库数据丢失，与数据库连接错误，主要功能丧失，基本模块缺失等问题。
- 【严重】：系统主要功能部分丧失、数据库保存调用错误、用户数据丢失，一级功能菜单不能使用但是不影响其他功能的测试。功能设计与需求严重不符，模块无法启动或调用，程序重启、自动退出，关联程序间调用冲突，安全问题、稳定性等。

- 【一般】：功能没有完全实现但是不影响使用，功能菜单存在缺陷但不会影响系统稳定性。如：操作时间长、查询时间长、格式错误、边界条件错误，删除没有确认框、数据库表中字段过多等

- 【次要】：界面、性能缺陷，建议类问题，不影响操作功能的执行，可以优化性能的方案等。如：错别字、界面格式不规范，页面显示重叠、不该显示的要隐藏，描述不清楚，提示语丢失，文字排列不整齐，光标位置不正确，用户体验感受不好，可以优化性能的方案等

触发：【总是触发】【经常触发】【有时触发】【特定条件触发】
:::
::: details <Badge type="danger" text="示例"/> #0 示例 Bug

存在版本：开始版本 ~ 结束版本

等级：【BUG等级】

触发：【触发条件】

描述：BUG的详细描述

处理备注（仅在未修复时出现）：正在修复呀

例：

```text
代码：
//会引发Bug的代码或操作
【正确】
正确的输出（或操作）
【实际】
有问题的输出（或操作）
```
:::
::: details <fixed-bug/> #1 注释代码执行

存在版本：0.1~0.6.1

等级：【严重】

触发：【总是触发】

描述：在**以“;”结尾**的注释后插入的代码仍然会被执行

例：

```text
代码：
//注释;kongzhitai.xieru("这不应该被输出");

【正确】

【实际】
这不应该被输出
```
:::
::: details <fixed-bug/> #2 解释器报错退出

存在版本：0.1~0.7

等级：【次要】

触发：【总是触发】

描述：在解释器中运行错误的代码**报错**时解释器会**立即退出**

例：

```text
GavaScript 1.x v0.7
>>> kongzhitai.xieru(1/0)
【正确】
错误：division by zero
>>> _
【实际】
Traceback (most recent call last):
  File "gs.exe", line 114514, in <module>
...
ZeroDivisionError: division by zero
【程序退出】
```
:::
::: details <snap-bug/> <fixed-bug/> #3 解释器报错

存在版本：25w11a~25w12b

等级：【崩溃】

触发：【总是触发】

描述：在解释器中运行**任何代码**都会输出**错误：name 'plist' is not defined**

例：

```text
【打开解释器】
警告：你正在使用一个快照版本[25w12a]，可能会存在一些问题，请不要在正式环境使用此版本。
GavaScript 1.x 25w12a
>>> 114514
【正确】
114514
>>> _
【实际】
错误：name 'plist' is not defined
>>> _
```
:::
::: details <snap-bug/> <fixing-bug/>  #4 控制台输出失效

存在版本：25w11a~25w12b

等级：【崩溃】

触发：【总是触发】

描述：方法失效，不输出任何内容

处理备注：将在**可能**的25w14a 0.7.2 0.8修复

例：

```text
代码：
kongzhitai.xieru(114514)
【正确】
114514
【实际】
（空）
```
:::
<script>
class snapBug extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        let badge = document.createElement('span');
        badge.setAttribute('class', 'VPBadge tip');
        badge.innerHTML = '快照';
        this.parentNode.insertBefore(badge, this);
        this.parentNode.removeChild(this);
    }
}
class fixingBug extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        let badge = document.createElement('span');
        badge.setAttribute('class', 'VPBadge warning');
        badge.innerHTML = '修复中';
        this.parentNode.insertBefore(badge, this);
        this.parentNode.removeChild(this);
    }
}
class fixedBug extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        let badge = document.createElement('span');
        badge.setAttribute('class', 'VPBadge info');
        badge.innerHTML = '已修复';
        this.parentNode.insertBefore(badge, this);
        this.parentNode.removeChild(this);
    }
}
class notFixedBug extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        let badge = document.createElement('span');
        badge.setAttribute('class', 'VPBadge danger');
        badge.innerHTML = '未修复';
        this.parentNode.insertBefore(badge, this);
        this.parentNode.removeChild(this);
    }
}
customElements.define("snap-bug", snapBug);
customElements.define("fixed-bug", fixedBug);
customElements.define("fixing-bug", fixingBug);
customElements.define("not-fixed-bug", notFixedBug);
</script>