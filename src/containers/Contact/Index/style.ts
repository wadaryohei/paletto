import styled from 'styled-components'
import ContactContainer from './container'
import { Colors } from '../../../const/Colors'
import { Padding } from '../../../const/Padding'
import { BreakPoints, max } from '../../../const/BreakPoints'

//--------------------------------------
// Contactページ全体のスタイル
//--------------------------------------
export const ContactContainerStyle = styled(ContactContainer)`
  background-color: ${Colors.smokeGray};

  .l-contact-form {
    padding: 0 ${Padding.p112};

    @media ${max(BreakPoints.md)} {
      padding: 0;
    }
  }
}
`
