

describe('Entrando', () => {

    it.skip('Acessando Caixa', () => {
        cy.viewport(1440, 900) -//colocar no json, para ir direto do json
            cy.visit('http://mga-apl044/QCaixa_CorrenteOld/login.aspx')
        //})

        //it('Colocando Login', () => {
        cy.get('input[name="pu"]').type('sysdba')
        cy.get('input[type="password"][name="pp"]').type('sup01')
        cy.get('input[type="submit"][value="Entrar"]').click()
        //})

        var relatorio = {
            css: 'content'
        }
        css: 'content'

        //Sistema Aberto
        //it('Acessando o Modulo Processamento de Contas', () => {
        //cy.wait(10000)
        cy.get('a[href="pagemain.aspx?g2p=.k.a_ROh_osmp.lgMGA.c.aPcse.anPEDiMrea.cStfc.a"]')
            .should('have.text', 'Processamento de Contas').click()

        cy.get('a[href="pagemain.aspx?g2p=.k.a_ROh_osmp.ln_osmiP_L.agMGA.c.aPcse.a.k.aPcsehRR.cSnPEDiMrea.cSgMrea.c.aOEp.liag.a"]',).should('have.text', 'Relatórios').click()

        cy.get(':nth-child(30) > .StmItemA').should('have.text', 'TISS002 - Demonstrativo de pagamento').click()

        cy.get('input[name="PAGAMENTOINICIAL"][type="text"]').type('01122021')
        cy.get('input[name="PAGAMENTOFINAL"][type="text"]').type('15122021')
        cy.get('a[href="FormPost.aspx?ptp=.ke.bga.0s.02akaOoploiLaka.0.0S.0gAcas000ch.0SLT.0nDr.0Sr.0.0O.0nO0c10dp.01kMms.0g0.0.0.0.0V0eamcs.0_1b.0n0s.0rC0.be7eNo.avp0u.a.cd1vVVO02d.cda.c.aTFM5p0qrpei0pep.0.0_hs.0nsP.0.0.0E0000M.0.0PeakasR0gRS0Pie0ge00E0Rh.0SIap.00.0T5ie0pa0000V2tm.0e70_.0r0gbw08oawr.cc.cd0r.a7s7h.a.cs__R1.c.ac.avvVVO02g.luyamnaxg.000R_m0_m_000PcaplG00c.0.0.0PeRcMi2aEMacMacapl_I0G.0.0tak0FfMca.0ual0bOoem07-lR0db.0drcH.0.bp.ar.ame.ce9.cr8n-c.aTFM5i0mses__R1.c.a5Qo.a"]').click()
        cy.wait(10000)
        cy.contains('#viewer', relatorio).click()
        //cy.get('#viewer')
    })
})