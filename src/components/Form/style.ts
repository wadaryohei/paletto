import styled from 'styled-components'
import { FormComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { FontSize } from '../../const/FontSize'
import { Padding } from '../../const/Padding'
import { SelectBackground } from '../../const/Images'
import { FontWeight } from '../../const/FontWeight'

//----------------------------------
// styledComponent
//----------------------------------
export const FormStyle = styled(FormComponent)`
  width: 100%;

  fieldset {
    input:nth-of-type(2) {
      margin-top: ${Margin.m8};
    }
  }

  input,
  select,
  textarea {
    width: 100%;
    display: block;
    background-color: ${Colors.smokeGray};
    border: solid 2px ${Colors.smokeGray};
    padding: ${Padding.p16} ${Padding.p16};
    border-radius: 4px;
    line-height: 1.6;
    font-size: 16px; /** スマホ時のスケールを防ぐために固定値を入れる */
    -webkit-appearance: none;
    appearance: none;

    &:focus {
      border: solid 2px ${Colors.primary};
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    li {
      width: 100%;
      margin-bottom: ${Margin.m56};

      p {
        font-size: ${FontSize.sm};
        font-weight: ${FontWeight.bold};
        margin-bottom: ${Margin.m16};
        line-height: 1.6;

        span {
          display: block;
          font-size: ${FontSize.xs};
          font-weight: ${FontWeight.normal};
          margin-top: ${Margin.m8};
          line-height: 1.6;
          color: ${Colors.black};
        }
      }
    }
  }

  .error {
    display: block;
    font-size: ${FontSize.sm};
    margin: ${Margin.m8} 0 ${Margin.m16};
    color: ${Colors.error};
  }

  .activeForm {
    width: 100%;
  }

  .formButton {
    text-align: center;
  }

  /**
   * @memo dataImageの背景画像読み込みを最後にしないとそれ以下のスタイルが全て崩れるので最後に読み込む
   */
  select {
    background-size: 12px auto;
    background-repeat: no-repeat;
    background-position: right 1.5rem top 50%;
    background-image: url('${SelectBackground}');
  }
`
