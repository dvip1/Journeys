import { createGlobalStyle } from 'styled-components';
/* https://realtimecolors.com/?colors=21081d-f8e2f4-c12fa9-f0c1e9-b92da1 */
/* https://realtimecolors.com/?colors=0b0a0a-f8ddf3-c12fa9-d2d0d2-686e69 */
export const colors = {
  text: '#0b0a0a',
  background: '#f8ddf3',
  primary: '#c12fa9',
  secondary: '#f0c1e9',
  accent: '#686e69',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  .textGrad{
    background: linear-gradient(120deg, ${colors.primary} 0%, ${colors.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
 
 
  .subtitle{
    font-size: 1.1rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    padding: 1.2rem 0;
  }
  @media (max-width: 768px) {
    .my-container{
      padding: 0 1rem;

    }
    .card-container{
      padding: 0 1rem;
    }
    
  }
 
  @media (min-width: 768px) and (max-width: 1325px) {
    .my-container {
      margin: 0 5rem;
    }
    .card-container{
      padding: 0 5rem;
    }
  }
  @media (min-width: 1325px) {
    .card-container{
      max-width: 1325px;
      margin: 0 auto;
      padding: 0 10rem;
    }
    .my-container {
      padding: 0 5rem;
    }
  }
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
  
  .bento-grid-item{
    width: 100%;
    transition: transform 0.5s;
  }
  
  

  .info{
    font-family: 'Inter', sans-serif;
  }
}


`;