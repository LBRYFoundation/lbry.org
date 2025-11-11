<xsl:stylesheet
    version="1.0"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <xhtml:html>
            <xhtml:body>
                <xhtml:h1>Sitemap</xhtml:h1>
                <xhtml:ul>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                        <xhtml:li><xhtml:a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></xhtml:a></xhtml:li>
                        <xhtml:ul>
                            <xsl:for-each select="xhtml:link">
                                <xhtml:li><xhtml:b>[<xsl:value-of select="@hreflang"/>]</xhtml:b><xsl:text> </xsl:text><xhtml:a href="{@href}"><xsl:value-of select="@href"/></xhtml:a></xhtml:li>
                            </xsl:for-each>
                        </xhtml:ul>
                    </xsl:for-each>
                </xhtml:ul>
            </xhtml:body>
        </xhtml:html>
    </xsl:template>

</xsl:stylesheet>
